import React, { Component } from 'react'

class MusicPlayer extends Component {
    render() {
        return (
            <iframe frameborder={"0"} border={"1"}
                marginwidth={"0"} marginheight={"0"}
                width={333} height={77}
                title ="sss"
                src="//music.163.com/outchain/player?type=2&id=464916877&auto=1&height=60" >
            </iframe >
        );
    }
}

export default MusicPlayer;