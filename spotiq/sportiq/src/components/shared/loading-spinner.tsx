export const LoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-slate/30 rounded-full"></div>
          <div className="w-12 h-12 border-4 border-slate border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
      </div>
    )
  }