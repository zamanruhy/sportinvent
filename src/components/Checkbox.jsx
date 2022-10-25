import { createEffect, createSignal, splitProps } from 'solid-js'
import './Checkbox.css'

export default function Checkbox(props) {
  const [, rest] = splitProps(props, [
    'class',
    'classList',
    'style',
    'label',
    'checked',
    'onChange',
    'disabled'
  ])
  const [localChecked, setLocalChecked] = createSignal(props.checked)

  createEffect(() => setLocalChecked(props.checked))

  return (
    <label
      class="checkbox"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList,
        'pointer-events-none': props.disabled
      }}
      style={props.style}
    >
      <input
        class="checkbox__input peer"
        type="checkbox"
        checked={localChecked()}
        disabled={props.disabled}
        indeterminate={props.indeterminate}
        onChange={(e) => {
          setLocalChecked(e.target.checked)
          props.onChange?.(e)
        }}
        {...rest}
      />
      <span class="checkbox__box" aria-hidden="true">
        <svg width="11" height="10">
          <path
            d="m9.426 0-5.41 6.85-2.44-3.093L0 4.914 4.017 10 11 1.156"
            fill="#333"
          />
        </svg>
      </span>
      {props.label && <span class="checkbox__label" innerHTML={props.label} />}
    </label>
  )
}
