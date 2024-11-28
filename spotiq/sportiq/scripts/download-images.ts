import fs from 'fs'
import path from 'path'
import https from 'https'

const imageUrls = {
  activities: {
    'gorilla-trekking.jpg': 'https://images.unsplash.com/photo-1624914482688-78cb1c7a3a2a',
    'kayaking.jpg': 'https://images.unsplash.com/photo-1572535641836-c0a8d3d9ea5e',
    'cultural-tour.jpg': 'https://images.unsplash.com/photo-1523805009345-7448845a9e53'
  },
  destinations: {
    'volcanoes.jpg': 'https://images.unsplash.com/photo-1621414050941-8aa30f506ec8',
    'lake-kivu.jpg': 'https://images.unsplash.com/photo-1580139155371-0135d8e31253',
    'nyungwe.jpg': 'https://images.unsplash.com/photo-1621414050941-8aa30f506ec8'
  },
  testimonials: {
    'sarah.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  gallery: {
    '1.jpg': 'https://images.unsplash.com/photo-1624914482688-78cb1c7a3a2a',
    '2.jpg': 'https://images.unsplash.com/photo-1580139155371-0135d8e31253',
    '3.jpg': 'https://images.unsplash.com/photo-1523805009345-7448845a9e53',
    '4.jpg': 'https://images.unsplash.com/photo-1621414050941-8aa30f506ec8'
  }
}

const downloadImage = (url: string, filepath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve())
      } else {
        response.resume()
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`))
      }
    })
  })
}

async function downloadAllImages() {
  for (const [category, images] of Object.entries(imageUrls)) {
    const dirPath = path.join(process.cwd(), 'public', 'images', category)
    
    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    for (const [filename, url] of Object.entries(images)) {
      const filepath = path.join(dirPath, filename)
      console.log(`Downloading ${filename}...`)
      try {
        await downloadImage(url, filepath)
        console.log(`Successfully downloaded ${filename}`)
      } catch (error) {
        console.error(`Failed to download ${filename}:`, error)
      }
    }
  }
}

downloadAllImages() 