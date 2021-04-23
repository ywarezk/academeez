/**
 * Description of the file
 *
 * Created January 18th, 2021
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

import { render } from "@testing-library/react"
import { Dialog } from './Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useState } from "react";

const Dialogwrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  }

  return (
    <div>
      <Dialog
        isCloseButton
        fullScreen
        fullWidth
        maxWidth="xl"
        open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent>
          <div style={ {height: '90%'} }>
            <h1>
              Hello world
            </h1>
          </div>

        </DialogContent>
      </Dialog>
      <button onClick={openDialog}>Click to open dialog</button>
    </div>
  )
}

describe('<Dialog />', () => {
  it('sanity', function() {
    render(
      <Dialogwrapper />
    )
  })
})
