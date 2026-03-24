import React from 'react'
import FeaturedCard from '../ui/FeaturedCard'

export default function FeaturedIn() {
    return (
        <section id="portfolio" className="flex flex-col justify-center pb-24">
            {/* Featured In */}
            <h2 className="mt-4 text-xl md:text-4xl font-light leading-tight text-slate-700">
                Beyond This{" "}
                <span className="font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                    Site
                </span>
            </h2>

            {/* GRID */}
            <div className="mt-3 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

                <FeaturedCard
                    title="Expo Bengkel Koding"
                    image="/news_yt.png"
                    href="https://www.youtube.com/watch?v=CCoQjztUoBc"
                />

                <FeaturedCard
                    title="Bengkel Koding"
                    image="https://dinus.ac.id/wp-content/uploads/2025/07/Salah-Satu-Tim-yang-Memamerkan-Karyanya-di-Bengkel-Koding-Expo-2025-980x735.jpg"
                    href="https://dinus.ac.id/tag/bengkel-koding/"
                />

                <FeaturedCard
                    title="Student Exchange UGM"
                    image="/news_ig.png"
                    href="https://instagram.com/p/C8_mVUzSUx8/"
                />

                <FeaturedCard
                    title="Lomba Kompetisi Siswa (LKS)"
                    image="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/04/12/425638656.jpg"
                    href="https://www.suaramerdeka.com/pendidikan/pr-043189719/smk-tth-juara-umum-lks-kabupaten-semarang-diharap-bisa-memacu-siswa"
                />

            </div>

        </section>
    )
}