import React, {useCallback, useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {LinksList} from "../components/LinksList";

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const getLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log(fetched)
            setLinks(fetched)
        } catch (e) {console.log(e)}
    }, [request, token])

    useEffect(() => {
        getLinks()
    }, [getLinks])

    if (loading) {
        return <Loader/>
    }
    return (
        <>
            {!loading && links && <LinksList links={links}/>}
        </>
    )
}