'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'

export default function Home() {
	const [showFork, setShowFork] = useState(false)
	const [showOakdale, setShowOakdale] = useState(false)
	const [showAsmEditor, setShowAsmEditor] = useState(false)
	const [showAdoptMe, setShowAdoptMe] = useState(false)
	const [showDemos, setShowDemos] = useState(false)
	function toggleFork() {
		setShowFork(!showFork)
	}
	function toggleOakdale() {
		setShowOakdale(!showOakdale)
	}
	function toggleAsmEditor() {
		setShowAsmEditor(!showAsmEditor)
	}
	function toggleAdoptMe() {
		setShowAdoptMe(!showAdoptMe)
	}
	function toggleDemos() {
		setShowDemos(!showDemos)
	}

	return (
		<main className="flex flex-col items-start justify-between">
			<div className="flex max-h-screen md:flex-row flex-col md:p-24 p-5 md:gap-32 gap-10">
				<div className="flex flex-col max-w-sm items-start justify-center gap-10">
					<h1 className="text-5xl">Ezekiel Kim</h1>
					<p>
						A computer science student @ UCLA passionate about audio
						engineering, swift development, command line interfacing, low-level programming, and
						DevOps Engineering. I am looking for a place to grow my skills and
						to create cutting-edge solutions. My portfolio consists of mainly
						fullstack projects focused on direct consumer attention as well as
						projects focused on developer environments. I spend most of my free
						time playing 🎸 guitar and bass guitar, and configuring my {' '}
						<Link
							href="https://github.com/zekekim/dotfiles"
							className="underline hover:font-bold"
						>
							dotfiles
						</Link>
						.
					</p>
          
					<Link
						href="/Ezekiel_Kim_Resume.pdf"
						className="text-lg underline hover:font-bold"
					>
						resume
					</Link>
					<Link
						href="https://www.linkedin.com/in/zeke-kim/"
						className="text-lg underline hover:font-bold"
					>
						linkedin
					</Link>
          <Link
						href="https://github.com/zekekim"
						className="text-lg underline hover:font-bold"
					>
						github
					</Link>

					<Link
						href="mailto:zekekim@ucla.edu"
						className="text-lg underline hover:font-bold"
					>
						email
					</Link>
				</div>
				<div className="flex flex-col items-start justify-start gap-10">
					<h1 className="text-2xl">projects</h1>
					<div className="flex flex-col items-start justify-start gap-5">
						<button
							className="flex flex-row items-center justify-center gap-2"
							onClick={toggleFork}
						>
							{showFork ? <FaChevronDown /> : <FaChevronRight />}
							<div className="flex flex-row items-end justify-end gap-10">
								<h2 className="text-lg">Fork App</h2>
								<h3 className="text-md text-gray-500">Engineering Manager</h3>
							</div>
						</button>

						{showFork ? (
							<>
								<p>
									An iOS nutrition app providing UCLA dining hall suggestions
									based on your macros and desired diet.
								</p>
							</>
						) : (
							<></>
						)}
					</div>
					<div className="flex flex-col items-start justify-start gap-5">
						<button
							className="flex flex-row items-center justify-center gap-2"
							onClick={toggleAdoptMe}
						>
							{showAdoptMe ? <FaChevronDown /> : <FaChevronRight />}
							<div className="flex flex-row items-end justify-end gap-10">
								<h2 className="text-lg">AdoptMe</h2>
								<h3 className="text-md text-gray-500">Lead Swift Dev</h3>
							</div>
						</button>

						{showAdoptMe ? (
							<>
								<p>
									An iOS Adopt-a-pet swiping app to match potential adopters
									with their preferred animals.
								</p>
								<Link
									href="https://github.com/zekekim/AdoptMe"
									className="underline hover:font-bold"
								>
									Github
								</Link>
							</>
						) : (
							<></>
						)}
					</div>
					<div className="flex flex-col items-start justify-start gap-5">
						<button
							className="flex flex-row items-center justify-center gap-2"
							onClick={toggleAsmEditor}
						>
							{showAsmEditor ? <FaChevronDown /> : <FaChevronRight />}
							<div className="flex flex-row items-end justify-end gap-10">
								<h2 className="text-lg">Assembly Text Editor</h2>
							</div>
						</button>

						{showAsmEditor ? (
							<>
								<p>
									A primitive Text Editor using ARM Assembly, C and C++. Created
									a primitive string class and Linked List structure in
									assembly.
								</p>
								<Link
									href="https://github.com/zekekim/rasm4"
									className="underline hover:font-bold"
								>
									Github
								</Link>
							</>
						) : (
							<></>
						)}
					</div>
					<div className="flex flex-col items-start justify-start pb-10">
						<button
							className="flex flex-row items-center justify-center gap-2"
							onClick={toggleDemos}
						>
							{showDemos ? <FaChevronDown /> : <FaChevronRight />}
							<h1 className="text-lg">Demos</h1>
						</button>
						{showDemos ? (
							<div className="flex flex-row gap-10">
								<Image
									src="/adoptme.gif"
									width={150}
									height={400}
									alt="Adopt Me Demo"
								/>
								<Image
									src="/desiredmacros.png"
									width={150}
									height={400}
									alt="Fork Demo 1"
								/>
								<Image
									src="/dietplan.png"
									width={150}
									height={400}
									alt="Fork Demo 2"
								/>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}
