
export default function Work () {
    return (
        <section id="work" className="work-section">
            <h2 className="text-3xl font-bold mb-4">Work</h2>
            <div className="work-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Example work item */}
                <div className="work-item p-4 border rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">Project Title</h3>
                    <p className="text-gray-600">Brief description of the project.</p>
                </div>
                {/* Add more work items as needed */}
            </div>
        </section>
    );
}