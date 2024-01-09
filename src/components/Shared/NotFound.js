function NotFound() {

    return (
        <div className='flex flex-col justify-center items-center' id='error-page'>
            <h1 className='text-8xl font-semibold m-9 mt-28'>Oops!</h1>
            <p className='text-3xl font-semibold italic text-gray-400 mt-14'>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}

export default NotFound;