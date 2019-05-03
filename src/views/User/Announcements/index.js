import React, {Component} from 'react'

import Wrapper from './style'

import Announcement from './announcement'
import Footer from '../../../components/SharedComponents/Footer'

const announcements = [
    {
        id: 0,
        title: 'Dustin broke the app again!',
        content: 'Nunc commodo dolor ac maximus blandit. Morbi ac ex vehicula lorem gravida pretium. Cras iaculis tellus massa, eu ultricies risus posuere non. Proin eget ipsum quis lectus efficitur lacinia. Pellentesque at magna consectetur, ornare nisl tempor, vehicula elit. Nam scelerisque urna odio, ut efficitur ante egestas sed. Etiam consequat rutrum aliquet. Maecenas congue urna quis sapien suscipit imperdiet. Fusce sodales mollis finibus. Aenean accumsan risus ligula, ut faucibus dolor volutpat ac.',
        created: '07/15/1971',
        author: 'Wilfred'
    },
    {
        id: 1,
        title: 'I fixed it!',
        content: 'Nunc commodo dolor ac maximus blandit. Morbi ac ex vehicula lorem gravida pretium. Cras iaculis tellus massa, eu ultricies risus posuere non. Proin eget ipsum quis lectus efficitur lacinia. Pellentesque at magna consectetur, ornare nisl tempor, vehicula elit. Nam scelerisque urna odio, ut efficitur ante egestas sed. Etiam consequat rutrum aliquet. Maecenas congue urna quis sapien suscipit imperdiet. Fusce sodales mollis finibus. Aenean accumsan risus ligula, ut faucibus dolor volutpat ac.',
        created: '07/15/1970',
        author: 'Dustin'
    },
    {
        id: 2,
        title: 'I updated something.',
        content: 'Nunc commodo dolor ac maximus blandit. Morbi ac ex vehicula lorem gravida pretium. Cras iaculis tellus massa, eu ultricies risus posuere non. Proin eget ipsum quis lectus efficitur lacinia. Pellentesque at magna consectetur, ornare nisl tempor, vehicula elit. Nam scelerisque urna odio, ut efficitur ante egestas sed. Etiam consequat rutrum aliquet. Maecenas congue urna quis sapien suscipit imperdiet. Fusce sodales mollis finibus. Aenean accumsan risus ligula, ut faucibus dolor volutpat ac.',
        created: '07/15/1969',
        author: 'Wilfred'
    },
]

class Announcements extends Component {
    constructor() {
        super()
        this.state = {
            announcements: announcements,
        }
    }
    render = () =>
        <Wrapper className='announcements'>
            <div className='announcement-list'>
                {this.state.announcements.map(announcement =>
                    <Announcement content={announcement} />
                )}
            </div>
            <Footer />
        </Wrapper>
}

export default Announcements