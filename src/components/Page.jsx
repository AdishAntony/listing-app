import React, { useState, useEffect } from 'react';
import { getContents } from '../core/services/pageServices';
import { useDispatch, useSelector } from 'react-redux'
import { lazy, Suspense } from "react";
import PageHead from './PageHead';

const PageContent = lazy(() => import('./PageContent'));

const Page = (props) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.pageReducer);
    let [filterText, setFilterText] = useState('');
    const defaultItemsPerPageCount = 20;

    // Initial rendering
    useEffect(() => {
        dispatch(getContents(1));
    }, []);

    const loadMore = (pageCount) => {
        if (
            parseInt(data.totalCount) > (defaultItemsPerPageCount * (pageCount - 1)
                || defaultItemsPerPageCount) && data.currentPageNum != pageCount && filterText == '')
            dispatch(getContents(pageCount));
    }

    const filterData = (filterText) => {
        setFilterText(filterText);
    }

    const filterDataAndPass = (data) => {
        if (filterText != '') {
            return data.filter(item => item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1)
        }
        return data;
    }

    return (
        <>
            <PageHead title={data.title || props.defaultTitle} filterData={filterData} />
            <div style={{ marginTop: '70px' }}>
                <Suspense fallback={<div>isLoading...</div>}>
                    <PageContent content={filterDataAndPass(data.content)} loadMore={loadMore} />
                </Suspense>
            </div>
        </>
    )
}

export default Page;
