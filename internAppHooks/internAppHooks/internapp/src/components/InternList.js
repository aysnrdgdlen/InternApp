import Intern from "./Intern"
import {Table, Button, Modal} from 'semantic-ui-react'
import {useState, useContext} from "react";
import {Interncontext} from "../contexts/Interncontext"

const InternList = (forceUpdate, setforceUpdate) => {
    var a = useContext(Interncontext)
    
    const {interns} = useContext(Interncontext)


    return (
        <>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    <Intern interns={interns}  />


                </Table.Body>

            </Table>
            
        </>
    )

}
export default InternList;