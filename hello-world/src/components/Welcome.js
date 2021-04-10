import React , {Component} from 'react'

class Welcome extends Component {
    render() {
        const {name, song} = this.props
        return (
            <h1>Welcome {name} who's gonna sing {song}</h1>
        )
    }
}

export default Welcome