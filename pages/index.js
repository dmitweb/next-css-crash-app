const onClick = () => {
	alert('working');
	console.log('working');
}

export default () => (
	<div className='example'>
		O Hai world!
		<button onClick={onClick}>Not working button</button>
	</div>
)
