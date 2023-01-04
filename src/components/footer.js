function Footer(props) {
    return (
        <footer>
            <p>Copyrigt {props.date.getFullYear()}</p>
        </footer>
    )
}

export default Footer;