import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <a href="#top" className="go-to-top-link-block w-inline-block">
                <img src="https://uploads-ssl.webflow.com/5b4d8dc1b5682f6077e9f04a/5b4d8dc1b5682f34f1e9f065_Icon-Top.png" alt="arrow" className="icon-go-to-top"/>
            </a>
            <div className="back-to-top-container">
                <div className="back-to-top">back to top</div>
            </div>
        </div>
    )
}