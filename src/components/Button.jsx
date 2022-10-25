import { splitProps, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import './Button.css'

export default function Button(props) {
  props = mergeProps({ as: 'button' }, props)
  const [, rest] = splitProps(props, [
    'class',
    'classList',
    'as',
    'variant',
    'size',
    'disabled',
    'children',
    'href'
  ])

  return (
    <>
      {props.as === 'input' ? (
        <input
          class="button"
          classList={{
            [props.class]: Boolean(props.class),
            ...props.classList,
            [`button_${props.variant}`]: Boolean(props.variant),
            [`button_${props.size}`]: Boolean(props.size)
          }}
          disabled={props.disabled}
          value={props.children}
          {...rest}
        />
      ) : (
        <Dynamic
          component={props.as}
          class="button"
          classList={{
            [props.class]: Boolean(props.class),
            ...props.classList,
            [`button_${props.variant}`]: Boolean(props.variant),
            [`button_${props.size}`]: Boolean(props.size)
          }}
          href={props.disabled ? null : props.href}
          disabled={props.disabled}
          {...rest}
        >
          {props.children}
        </Dynamic>
      )}
    </>
    // <Dynamic
    //   component={props.as}
    //   class="button"
    //   classList={{
    //     [props.class]: Boolean(props.class),
    //     ...props.classList,
    //     [`button_${props.variant}`]: Boolean(props.variant),
    //     [`button_${props.size}`]: Boolean(props.size)
    //   }}
    //   href={props.disabled ? null : props.href}
    //   disabled={props.disabled}
    //   children={props.as === 'input' ? undefined : props.children}
    //   value={props.as === 'input' ? props.children : undefined}
    //   {...rest}
    // />
  )
}
