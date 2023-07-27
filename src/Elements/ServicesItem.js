export default function ServicesItem( { content, isActive } ) {
    return(
        <div className={`Services-Item ${isActive ? 'active' : ''}`}>
            {content}
        </div>
    )
}