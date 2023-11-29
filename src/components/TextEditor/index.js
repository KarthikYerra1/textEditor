import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'

import {
  AppContainer,
  BgContainer,
  AppHeadingContainer,
  AppHeading,
  AppImageContainer,
  AppImage,
  TextElementContainer,
  ButtonsContainer,
  ListItem,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textInput: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onClickBold = () => {
    this.setState(prev => ({isBoldActive: !prev.isBoldActive}))
  }

  onClickItalic = () => {
    this.setState(prev => ({isItalicActive: !prev.isItalicActive}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({isUnderlineActive: !prev.isUnderlineActive}))
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {
      textInput,
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
    } = this.state
    return (
      <BgContainer>
        <AppContainer>
          <AppHeadingContainer>
            <AppHeading>Text Editor</AppHeading>
            <AppImageContainer>
              <AppImage
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </AppImageContainer>
          </AppHeadingContainer>
          <TextElementContainer>
            <ButtonsContainer>
              <ListItem>
                <Button
                  type="button"
                  active={isBoldActive}
                  onClick={this.onClickBold}
                  data-testid="bold"
                >
                  <VscBold />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  active={isItalicActive}
                  onClick={this.onClickItalic}
                  data-testid="italic"
                >
                  <GoItalic />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  active={isUnderlineActive}
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </Button>
              </ListItem>
            </ButtonsContainer>
            <TextArea
              value={textInput}
              onChange={this.onChangeInput}
              bold={isBoldActive}
              italic={isItalicActive}
              underline={isUnderlineActive}
            />
          </TextElementContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
