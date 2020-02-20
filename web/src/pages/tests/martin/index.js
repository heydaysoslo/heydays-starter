import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/Layout'
import { Grid, GridItem, Container } from '../../../components/elements'
import { spacing } from '../../../styles/utilities'

const TestSection = styled.section`
  ${spacing.lg('py')};
  background-color: black;
  color: white;
  a {
    color: silver;
    &:hover {
      color: white;
    }
  }
`

const ImageTextSplit = styled.section`
  ${spacing.lg('py')};
`

const Index = () => {
  return (
    <Layout>
      <TestSection>
        <Container>
          <Grid gap={true}>
            <GridItem span={{ md: 4, lg: 6 }}>
              <p>
                A selection of recent websites
                <br />
                and e-commerce projects
              </p>
            </GridItem>
            <GridItem span={{ md: 8, lg: 6 }}>
              <Grid columns={{ xs: 1, sm: 2 }}>
                <div>
                  <p>
                    Design &amp; architecture
                    <br />
                    <a
                      href="https://www.ahuseby.no"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      A. Huseby
                    </a>
                    <br />
                    <a
                      href="https://www.escalia.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Escalia
                    </a>
                    <br />
                    <a
                      href="https://fjordfiesta.com/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Fjordfiesta
                    </a>
                    <br />
                    <a
                      href="https://levehytter.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Leve Hytter
                    </a>
                    <br />
                    <a
                      href="https://northern.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Northern
                    </a>
                    <br />
                    <a
                      href="https://www.norwegianpresence.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Norwegian Presence
                    </a>
                    <br />
                    <a
                      href="https://www.oslodeco.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Oslo Deco
                    </a>
                    <br />
                    <a
                      href="https://www.stryntrappa.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Stryntrappa
                    </a>
                    <br />
                    <br />
                    Tech &amp; society
                    <br />
                    <a
                      href="https://nyby.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Nyby
                    </a>
                    <br />
                    <a
                      href="https://www.sciadd.com/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Science Addiction
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    Hospitality &amp; food
                    <br />
                    <a
                      href="https://maaemo.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Maaemo
                    </a>
                    <br />
                    <a
                      href="https://sommerrohouse.com"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Sommerro
                    </a>
                    <br />
                    <a
                      href="https://talormade.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Talormade
                    </a>
                    <br />
                    <br />
                    Agency
                    <br />
                    <a
                      href="https://www.boaeiendom.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Boa
                    </a>
                    <br />
                    <a
                      href="https://henryjlyons.com/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Henry J Lyons
                    </a>
                    <br />
                    <a
                      href="https://www.pudderagency.com/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Pudder
                    </a>
                    <br />
                    <br />
                    Media
                    <br />
                    <a
                      href="https://www.arkitektnytt.no/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      Arkitektnytt
                    </a>
                    <br />
                    <a
                      href="https://www.dn.no/d2/"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      D2
                    </a>
                  </p>
                </div>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </TestSection>
      <ImageTextSplit>
        <Container>
          <Grid gap={true} align="center" justify="center">
            <GridItem span={{ sm: 6, lg: 4 }}>
              <img src="https://source.unsplash.com/random" />
            </GridItem>
            <GridItem span={{ sm: 6, lg: 4 }}>
              <h3>Lorem ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <h4>Some choices</h4>
              <Grid gap={true} columns={{ xs: 2, md: 4 }}>
                <div>Feature 1</div>
                <div>Feature 2</div>
                <div>Feature 3</div>
                <div>Feature 4</div>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </ImageTextSplit>
    </Layout>
  )
}

export default Index
