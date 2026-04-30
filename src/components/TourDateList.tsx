export type TourDate = {
	city: string;
	theatre: string;
	dates: string;
	link: string;
};

type Props = {
	dates: TourDate[];
};

/** Four equal-width columns */
const rowGrid =
	"grid w-full grid-cols-4 items-start gap-x-6 px-5 text-left md:gap-x-8 md:px-6";

export default function TourDateList({ dates }: Props) {
	return (
		<section className="rounded-lg border border-indigo-100 bg-white shadow-sm ring-1 ring-indigo-50">
			<h2 className="border-b border-indigo-50 bg-indigo-50/80 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-800 md:px-6">
				Tour dates
			</h2>
			<div className="overflow-x-auto">
				<div className="min-w-full text-sm md:min-w-0">
					<div
						className={`${rowGrid} border-b border-neutral-100 bg-indigo-50/50 py-3 text-xs font-medium uppercase tracking-wide text-indigo-700`}
					>
						<div className="min-w-0">City</div>
						<div className="min-w-0">Venue</div>
						<div className="min-w-0">Dates</div>
						<div className="min-w-0">Link</div>
					</div>
					{dates.map((row) => (
						<div
							key={`${row.city}-${row.theatre}-${row.dates}`}
							className={`${rowGrid} border-b border-neutral-100 py-4 last:border-b-0`}
						>
							<div className="wrap-break-word min-w-0 font-medium text-indigo-950">{row.city}</div>
							<div className="wrap-break-word min-w-0 text-neutral-700">{row.theatre}</div>
							<div className="wrap-break-word min-w-0 text-neutral-600">{row.dates}</div>
							<div className="min-w-0">
								<a
									href={row.link}
									className="inline-flex items-center rounded-full bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
									target="_blank"
									rel="noopener noreferrer"
								>
									Tickets
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
