
const Backdrop = ( {side, onToggle} ) => {
    return (
        <div className={`w-full h-screen backdrop z-20 fixed top-0 left-0 ${!side && 'hidden'}`}
        onClick={onToggle}
        >
        </div>
    )
}

export default Backdrop
