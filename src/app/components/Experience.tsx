

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className="experience-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">                <div className="experience-item p-4 border rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">Job Title</h3>
                    <p className="text-gray-600">Brief description of the role and responsibilities.</p>
                </div>
            </div>
        </section>
    );
}