import { Menu, Container } from 'semantic-ui-react'
const Navbar = () => {

    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='h3' header>
                    InternApp
                </Menu.Item>
            </Container>
        </Menu>

    )

}
export default Navbar;


