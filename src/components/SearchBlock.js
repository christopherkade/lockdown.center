import React, { useState } from 'react';
import styled from 'styled-components'

import Dropdown from 'components/Dropdown.js'
import Button from 'components/Button.js'

import articles from 'assets/data/articles.json'
import tutorials from 'assets/data/tutorials.json'
import videos from 'assets/data/videos.json'

import { device } from 'device.js';

const options = {
    VIDEOS: {
        data: videos,
        text: 'a video',
        value: 'VIDEOS'
    },
    ARTICLES: {
        data: articles,
        text: 'an article',
        value: 'ARTICLES'
    },
    TUTORIALS: {
        data: tutorials,
        text: 'a tutorial',
        value: 'TUTORIALS'
    }
}

const Wrapper = styled.div`
  @media ${device.mobileL} {
      font-size: 0.75rem;
  }
`

const SearchBlock = () => {
    const [selectedOption, setSelectedOption] = useState(options['VIDEOS'])

    const handleChange = (e) => {
        setSelectedOption(options[e.target.value])
    }

    const handleClick = () => {
        console.log('displaying ', selectedOption)

        const randomLink = selectedOption.data[Math.floor(Math.random() * selectedOption.data.length)]

        console.log('random link', randomLink)

        window.open(randomLink, '_blank');
    }

    return (
        <Wrapper>
            <p>
                I'm looking for
                
                <Dropdown onChange={handleChange}>
                    <option value={options['VIDEOS'].value} key={options['VIDEOS'].value}>{options['VIDEOS'].text}</option>
                    <option value={options['ARTICLES'].value} key={options['ARTICLES'].value}>{options['ARTICLES'].text}</option>
                    <option value={options['TUTORIALS'].value} key={options['TUTORIALS'].value}>{options['TUTORIALS'].text}</option>
                </Dropdown>

                <Button onClick={handleClick}>Let's go</Button>
            </p>
        </Wrapper>
    )
}

export default SearchBlock