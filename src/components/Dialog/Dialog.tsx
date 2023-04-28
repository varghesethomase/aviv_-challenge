import {SyntheticEvent, useEffect, useRef} from "react"
import "./Dialog.css"

interface Props {
  onClose: () => void
  children: React.ReactNode
  isOpen: boolean
  shouldCloseOnOverlayClick?: boolean
  shouldCloseOnEsc?: boolean
  classes?: string
}

const Dialog = (props: Props) => {
  const defaultProps: Readonly<Partial<Props>> = {
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true,
    classes: "",
  }

  const mergedProps = {
    ...defaultProps,
    ...props,
  }

  const dialogRef = useRef<HTMLDialogElement>(null)

  const preventAutoClose = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (mergedProps.shouldCloseOnOverlayClick) {
      mergedProps.onClose()
    } else {
      preventAutoClose(event)
    }
  }

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement, Event>) => {
    if (mergedProps.shouldCloseOnEsc) {
      mergedProps.onClose()
    } else {
      event.preventDefault()
    }
  }

  useEffect(() => {
    if (mergedProps.isOpen) {
      dialogRef.current?.showModal()
      document.body.classList.add("dialog--open")
    } else {
      const onAnimationEndHandler = () => {
        dialogRef.current?.classList.remove("dialog--is-hidden")
        dialogRef.current?.close()
        dialogRef.current?.removeEventListener(
          "animationend",
          onAnimationEndHandler
        )
      }

      if (document.body.classList.contains("dialog--open")) {
        dialogRef.current?.addEventListener(
          "animationend",
          onAnimationEndHandler
        )
        dialogRef.current?.classList.add("dialog--is-hidden")
        document.body.classList.remove("dialog--open")
      }
    }
  }, [mergedProps.isOpen])

  return (
    <dialog
      ref={dialogRef}
      className={`dialog ${mergedProps.classes}`}
      onCancel={handleCancel}
      onClick={handleOverlayClick}
    >
      <div className="dialog__content-wrapper" onClick={preventAutoClose}>
        <div className="dialog__content">{mergedProps.children}</div>
      </div>
    </dialog>
  )
}

export default Dialog
