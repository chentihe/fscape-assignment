import Card from './Card';
import Line from './Line';
import Container from './Container';
import { Paragraph } from '../types/Paragraph';
import ParagraphComponent from './Paragraph';
import { Fragment } from 'react';

export default function Paragraphs(props: {
    paragraphs: Paragraph[]
}) {
    const { paragraphs } = props;
    const lastIdx = paragraphs.length - 1;

    return (
        <Card>
            <Container
                horizon={28}
                up={28}
                down={28}
            >
                {paragraphs.map((paragraph, idx) => {
                    if (idx != lastIdx) {
                        return (
                            <Fragment key={idx}>
                                <ParagraphComponent 
                                    paragraph={paragraph}
                                />
                                <Line
                                    marginTop={48}
                                    marginBottom={24}
                                />
                            </Fragment>
                        )
                    } else {
                        return (
                            <Fragment key={idx}>
                                <ParagraphComponent 
                                    paragraph={paragraph}
                                />
                            </Fragment>
                        )
                    }
                } )}
            </Container>
        </Card>
    )
}