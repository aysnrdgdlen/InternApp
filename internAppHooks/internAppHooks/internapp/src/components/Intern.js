import { Button, Table, Modal, Header } from 'semantic-ui-react'
import { useState, useEffect, useContext } from "react";
import { Interncontext } from '../contexts/Interncontext';


let defaultIntern = {
    name: '',
    surname: '',
    age: ''
}

const Intern = ({ interns }) => {
    const contexts = useContext(Interncontext);

    const handleDelete = (id) => {
        var a = contexts;
        contexts.service.deleteUser(id)
    }

    const getUserr = (id) => {
        var a = contexts;
        contexts.service.getUser(id);
    };



    return (
        <>
            {
                interns.map((intern) => {
                    return (

                        <Table.Row key={intern._ID}>
                            <Table.Cell>{intern.name}</Table.Cell>
                            <Table.Cell>{intern.surname}</Table.Cell>
                            <Table.Cell>{intern.age}</Table.Cell>
                            <td>
                                <Button onClick={(e) => getUserr(intern._ID)} content='Update' primary />
                                <Button onClick={(e) => handleDelete(intern._ID)} content='Delete' secondary />
                            </td>
                        </Table.Row>

                    );
                })
            }

        </>

    )

}
export default Intern;