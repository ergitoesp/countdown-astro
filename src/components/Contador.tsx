import { useRemainingTime } from '@hooks/tiempocontador'

type Contador = {
	targetDate: Date }

export const Countdown = ({ targetDate }: Contador) => {
	const { days, hours, minutes, seconds, countdownEnded } = useRemainingTime(targetDate)
	const time = [
		{ label: 'Days', value: days },
		{ label: 'Hours', value: hours },
		{ label: 'Minutes', value: minutes },
		{ label: 'Seconds', value: seconds }
	]

	return (
		<>
			<div class=' text-4xl mb-2 mt-10 font-bold opacity-70'>
				{!countdownEnded ? 'New Project' : '✨✨✨✨✨'} 
			</div>
			<section class='flex'>
				{time.map(({ label, value }) => (
					<div class='flex-col w-24 md:w-32'>
						<div class='text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 '>
							{value}
						</div>
						<span class='text-black text-xl uppercase font-bold'>{label}</span>
					        </div>
				              ))}
				</section>
			</>
		)
	}
