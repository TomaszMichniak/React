export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='h-100 w-full flex items-center justify-center bg-teal-lightest font-sans'>
			<div className='bg-gray-200 rounded shadow p-3 m-4 w-full lg:w-3/4 lg:max-w-lg'>
				{children}
			</div>
		</div>
	);
}
