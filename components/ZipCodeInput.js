export default function ZipCodeInput(props) {
    const { name, value, handleChange } = props

    return (
        <input
            className='w-full rounded-md p-4 border-2 border-gray-300 bg-gray-200 text-xl text-center'
            name={name}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder='Zip Code'
        />
    )
}
