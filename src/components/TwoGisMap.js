export default function TwoGisMap() {
    return (
        <div className="w-full h-full">
            <iframe
                title="2GIS Map"
                className="rounded-lg"
                width="100%"
                height="100%"
                src="http://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A51.088240356098254%2C%22lon%22%3A71.41692638397218%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22nur_sultan%22%7D%2C%22org%22%3A%2270000001050884636%22%7D"
            />

            <noscript className="text-red-700 font-bold">
                Виджет карты использует JavaScript. Включите его в настройках вашего браузера.
            </noscript>
        </div>
    );
}
