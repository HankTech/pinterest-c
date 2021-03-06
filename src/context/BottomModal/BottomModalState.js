import React, { useReducer, useMemo } from 'react'
import BottomModalContext from './BottomModalContext'
import BottomModalReducer from './BottomModalReducer'
import { SET_VISIBLE } from '../../types/Actions'

const BottomModalState = ({ children }) => {
  const initialState = {
    visible: false
  }

  const [state, dispatch] = useReducer(BottomModalReducer, initialState)

  const modalContext = useMemo(() => ({
    setVisible: (state) => {
      dispatch({ type: SET_VISIBLE, payload: state })
    }
  }), [])

  return (
      <BottomModalContext.Provider value={{ visible: state.visible, setVisible: modalContext.setVisible }}>
        {children}
      </BottomModalContext.Provider>
  )
}

export default BottomModalState
