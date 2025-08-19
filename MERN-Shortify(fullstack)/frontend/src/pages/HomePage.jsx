import UrlForm from "../components/UrlForm";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4 text-center">🔗URL Shortener</h1>
                <UrlForm />
            </div>
        </div>
    );
};

export default HomePage;
