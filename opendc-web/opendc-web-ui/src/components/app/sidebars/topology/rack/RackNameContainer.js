import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NameComponent from '../NameComponent'
import { editRackName } from '../../../../../redux/actions/topology/rack'

const RackNameContainer = ({ tileId }) => {
    const rackName = useSelector((state) => state.objects.rack[state.objects.tile[tileId].rack].name)
    const dispatch = useDispatch()
    const callback = (name) => {
        if (name) {
            dispatch(editRackName(name))
        }
    }
    return <NameComponent name={rackName} onEdit={callback} />
}

RackNameContainer.propTypes = {
    tileId: PropTypes.string.isRequired,
}

export default RackNameContainer
