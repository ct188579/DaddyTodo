export function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-white dark:bg-gray-800 shadow-inner mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <div className="mb-2 md:mb-0">
              <span>© {currentYear} 陈涛. All rights reserved.</span>
            </div>
            <div>
              <span>备案号：
              <a href="https://icp.gov.moe/?keyword=20250052" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">萌ICP备20250052号</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  