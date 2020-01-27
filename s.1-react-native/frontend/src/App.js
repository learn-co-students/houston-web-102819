import React, { useState } from 'react'
import { StyleProvider, Drawer, Card, Text, Button } from './components'
import { MainPage } from './MainPage'
import { Router } from './Router'
import { Route, useHistory } from 'react-router'
import { DragonPage } from './DragonPage'
import { CameraPage } from './CameraPage'


const Navigation = () => {

    const history = useHistory()

    return (
        <Card style={{ flex: 1 }}>
            <Card.Content>
                <Button onPress={() => history.push('/dragons')}>
                    Go to Dragons
                </Button>
                <Button onPress={() => history.push('/camera')}>
                    Camera Page
                </Button>
                <Button onPress={() => history.push('/')}>
                    Main Page
                </Button> 
            </Card.Content>
        </Card>
    )
}

export const App = () => {
    // Drawer (Menu) 
    const [drawerIsOpen, showDrawer] = useState(false)

    return (
        <StyleProvider>
            <Router>
                <Button onPress={() => showDrawer(true)}>=</Button>
                <Drawer
                    open={drawerIsOpen}
                    onClose={() => showDrawer(false)}
                    render={() => <Navigation/>}>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/camera" component={CameraPage} />
                    <Route exact path="/dragons" component={DragonPage} />
                </Drawer>
            </Router>
        </StyleProvider>
    )
}
