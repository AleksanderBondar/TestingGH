import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { Rerousel } from 'rerousel';

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100%/5);
    background-color: transparent;
    filter: grayscale(100%);
    @media (max-width:768px){
        width:33%;
    }
  `;
const Images: { imageUrl: string; link: string; key: string }[] = [
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        link: 'https://www.typescriptlang.org/',
        key: '1',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
        link: 'https://nextjs.org/',
        key: '2',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        link: 'https://reactjs.org/',
        key: '3',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg',
        link: 'https://github.com/',
        key: '4',
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/ip3/discord.com.ico',
        link: 'https://discord.com/',
        key: '5',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
        link: 'https://graphql.org/',
        key: '6',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
        link: 'https://www.javascript.com/',
        key: '7',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        link: 'https://en.wikipedia.org/wiki/HTML',
        key: '8',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        link: 'https://en.wikipedia.org/wiki/CSS',
        key: '9',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
        link: 'https://es.wikipedia.org/wiki/Usuario:Preocupante/Taller/Tailwind_CSS',
        key: '10',
    },
];
interface LogoCloudProps {
    images: Array<{ imageUrl: string; link: string; key: string }>;
}

const TechBackground: React.FC = ({children}) => 
    <div className="w-full py-16 bg-tertiaryBackgroundColor">{children}</div>;
const Techtext: React.FC = ({ children }) => 
    <div className="font-medium text-blue-darkfont text-2xl text-center mb-10 p-8">{children}</div>;

export const Techbar: React.FC<LogoCloudProps> = ({ images }) => {
    const customerLogo = useRef(null);
    return (
            <TechBackground>
                <Techtext>Technologie, których używamy</Techtext>
                    <Rerousel itemRef={customerLogo} interval={3000} stop={false}>
                            {Images.map(({ imageUrl, link, key }) => {
                                return (
                                    <Item ref={customerLogo} key={key}>
                                        <a href={link}>
                                        <img src={imageUrl} className="w-20" />
                                        </a>
                                    </Item>
                                );
                            })}
                        </Rerousel>
            </TechBackground>

    );
};
