export default function InputEmail() {
    return (
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Link:
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
        
          <input
            type="email"
            name="email project"
            id="email project"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Project's Email"
          />
          
        </div>
      </div>
    )
  }
