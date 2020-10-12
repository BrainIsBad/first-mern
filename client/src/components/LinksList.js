import React from "react";
import {Link} from "react-router-dom";

export const LinksList = ({links}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            {
                links.map((link, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>{new Date(link.date).toLocaleDateString()}</td>
                            <td><Link to={`/detail/${link._id}`}>Open</Link></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}