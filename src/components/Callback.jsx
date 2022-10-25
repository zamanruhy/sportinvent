import Button from './Button'
import './Callback.css'
import Checkbox from './Checkbox'
import Input from './Input'

export default function Callback() {
  return (
    <div class="callback">
      <h2 class="callback__title">Обратный звонок</h2>
      <form action="#" className="callback__form">
        <div className="callback__grid">
          <label className="callback__field">
            <span class="callback__legend">Имя:</span>
            <Input type="text" name="name" required />
          </label>
          <label className="callback__field">
            <span class="callback__legend">Телефон:</span>
            <Input
              type="tel"
              name="tel"
              required
              placeholder="+7 (___) ___ __ __"
            />
          </label>
        </div>
        <div class="my-7">
          <Checkbox
            name="agreement"
            label="Даю согласие на обработку персональных данных&nbsp;*"
          />
        </div>
        <Button
          as="input"
          class="px-8"
          type="submit"
          variant="primary"
          size="md"
        >
          Перезвонить мне
        </Button>
      </form>
    </div>
  )
}
