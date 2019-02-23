import { h, Component } from 'preact'
import { ChromePicker } from 'react-color'


export default class PickerDialog extends Component {

    handleClick(e) {
        this.props.onClick(e)
    }

    handleColorChange(e) {
        this.props.onChange(e)
    }

    render({ ...props }, { ...state }) {
        let value = props.value ? props.value : null
        let zIndex = props.zIndex ? props.zIndex : '2'

        return (
            <div style={{ position: 'absolute', zIndex: zIndex }}>
                <div
                    style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
                    onClick={this.handleClick.bind(this)}
                />
                <ChromePicker
                    color={value}
                    onChange={this.handleColorChange.bind(this)}
                />
            </div>
        )
    }

}

/* 
import React from 'react'
import PropTypes from 'prop-types'

const PickerDialog = ({
  value,
  onClick,
  onChange
}) => (
  <div style={{ position: 'absolute', zIndex: '2' }}>
    <div
      style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
      onClick={onClick}
    />
    <ChromePicker
      color={value}
      onChange={onChange}
    />
  </div>
)

PickerDialog.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default PickerDialog */
