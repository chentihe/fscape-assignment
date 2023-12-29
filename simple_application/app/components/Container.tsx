export default function Container(props: {
    horizon: number,
    up: number,
    down: number,
    children: any
}) {
    const { horizon, up, down, children } = props

    return (
        <div style={{ 
            marginLeft: `${horizon}px`,
            marginRight: `${horizon}px`,
            marginTop: `${up}px`, 
            marginBottom: `${down}px`,
            width: '100%' 
        }}>
            {children}
        </div>
    )
}