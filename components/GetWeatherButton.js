export default function GetWeatherButton(props) {
    const { title, action, zip } = props
    return (
        <button
            className='bg-gray-200 p-4 ml-3 border-2 border-gray-300 rounded-md hover:bg-gray-300'
            onClick={() => action(zip)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
    )
}
