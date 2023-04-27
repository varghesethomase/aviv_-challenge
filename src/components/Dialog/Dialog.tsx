import {useEffect, useRef} from "react"
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

  useEffect(() => {
    if (mergedProps.isOpen) {
      dialogRef.current?.showModal()
      document.body.classList.add("modal--open")
    } else {
      dialogRef.current?.close()
      document.body.classList.remove("modal--open")
    }
  }, [mergedProps.isOpen])

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (!mergedProps.shouldCloseOnOverlayClick) {
      preventAutoClose(event)
    } else {
      mergedProps.onClose()
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current
    const handleEscKeyPress = (event: Event) => {
      if (!mergedProps.shouldCloseOnEsc) {
        event.preventDefault()
        event.stopPropagation()
      }
    }
    console.log(dialog)
    dialog?.addEventListener("cancel", handleEscKeyPress)
    return () => {
      dialog?.removeEventListener("cancel", handleEscKeyPress)
    }
  }, [mergedProps.shouldCloseOnEsc])

  return (
    <dialog
      ref={dialogRef}
      className={`dialog ${mergedProps.classes}`}
      onCancel={mergedProps.onClose}
      onClick={handleOverlayClick}
    >
      <div className="dialog__content-wrapper" onClick={preventAutoClose}>
        <div className="dialog__content">{mergedProps.children}</div>
      </div>
    </dialog>
  )
}

export default Dialog
