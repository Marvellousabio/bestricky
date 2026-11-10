import React from "react";
import { TEAM } from "../constants";

const initials = (name: string) =>
	name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

/** Founder shown with a portrait; remote team members shown as faceless cards. */
const TeamGrid: React.FC = () => (
	<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
		{TEAM.map((m) => (
			<article key={m.id}>
				{m.image ? (
					<div className="aspect-[4/5] overflow-hidden bg-stone-200">
						<img
							src={m.image}
							alt={`${m.name}, ${m.role}`}
							className="h-full w-full object-cover object-top"
							loading="lazy"
							decoding="async"
						/>
					</div>
				) : (
					<div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#efebe3]">
						<span className="text-7xl font-medium tracking-[-0.05em] text-slate-950/15" aria-hidden="true">
							{initials(m.name)}
						</span>
						<span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
							</span>
							Remote
						</span>
					</div>
				)}
				<h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-slate-950">{m.name}</h3>
				<p className="text-sm text-slate-500">
					{m.role}
					{m.remote && " · Remote"}
				</p>
				<p className="mt-3 text-sm leading-relaxed text-slate-600">{m.bio}</p>
				{(m.linkedin || m.website) && (
					<div className="mt-3 flex gap-4 text-sm font-semibold text-blue-700">
						{m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
						{m.website && <a href={m.website} target="_blank" rel="noopener noreferrer">Website ↗</a>}
					</div>
				)}
			</article>
		))}
	</div>
);

export default TeamGrid;
