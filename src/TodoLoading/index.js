import ContentLoader from "react-content-loader";

const TodoLoading = () => (
    <ContentLoader
        backgroundColor="#77767b"
        foregroundColor="#ecebeb">
        {/* Only SVG shapes */}
        <rect x="0" y="0" width="100%" height="70" />
    </ContentLoader>
)

export {TodoLoading}