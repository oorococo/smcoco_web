import React from 'react'
import { reboot } from './reboot'
import { containerStyle } from './grid'
import { flex } from './flex'
import { box } from './box'
import { sidebar } from './sidebar'

export default () => <style>{`${reboot}${containerStyle}${flex}${box}${sidebar}`}</style>
