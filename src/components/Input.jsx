import { splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import './Input.css'

export default function Input(props) {
  const [, rest] = splitProps(props, ['class', 'classList', 'multiline'])

  return (
    <>
      {props.multiline ? (
        <textarea
          class="input"
          classList={{
            [props.class]: Boolean(props.class),
            ...props.classList
          }}
          {...rest}
        ></textarea>
      ) : (
        <input
          class="input"
          classList={{
            [props.class]: Boolean(props.class),
            ...props.classList
          }}
          type="text"
          {...rest}
        />
      )}
      {/* <Dynamic
        component={props.multiline ? 'textarea' : 'input'}
        class="input"
        classList={{
          [props.class]: Boolean(props.class),
          ...props.classList
        }}
        type={!props.multiline ? 'text' : undefined}
        {...rest}
      /> */}
    </>
  )
}
