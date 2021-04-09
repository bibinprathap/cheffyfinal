import React, { useState, useEffect } from 'react';
import { fetchFood, popularAndNew, allPlates, getCategory } from '../../../redux/actions/food';
import { Row, Col, Skeleton } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import FoodBanner from './FoodBanner';
import FoodGrid from './FoodGrid';
import FoodSearch from './FoodSearch';
import NewOnCheffy from './NewOnCheffy';
import PopularNearYou from './PopularNearYou';
import MustTryChef from './MustTryChef';
import RecommendedChef from './RecommendedChef';
import TopKitchens from "./TopKitchens";
import '../../../../styles/foodContent.css';
import { FoodGridSkeleton, NewAndPopularSkeleton } from '../Skeleton';
import Fuse from "fuse.js";
import Link from "next/link";

const FoodContent = () => {
	const dispatch = useDispatch();
	const [popular, setPopular] = useState('');
	const [_new, setNew] = useState('');
	const [category, setCategory] = useState('');
	const itemCount = useSelector(countSelector, shallowEqual);
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState([]);
	const [searchIn, setSearchIn] = useState([]);

	useEffect(async () => {
		var allPlates = await dispatch(popularAndNew());
		const getNewAndPopular = await dispatch(popularAndNew());
		setPopular(getNewAndPopular.data.popular);
		setNew(getNewAndPopular.data.new);
		const resCategory = await dispatch(getCategory())
		console.log(resCategory.message)
		setCategory(resCategory.data);
		setSearchIn(allPlates.data.popular)
		dispatch(fetchFood());
	}, []);


	const searchData = (pattern) => {
		setKeyword(pattern)
		setResults([]);
		const fuse = new Fuse(searchIn, {
			keys: ["name"],
			options: { "threshold": 1, "distance": 1000 }
		});

		const result = fuse.search(pattern);
		const matches = [];
		if (!result.length) {
			setResults([]);
		} else {
			result.forEach(({ item }) => {
				if (matches.length < 6) {
					matches.push(item);
				}
			});
			setResults(matches);
		}
		console.log(searchIn)
		console.log(matches)
	};


	return (
		<>
			<FoodBanner keyword={keyword} setKeyword={setKeyword} searchData={searchData} />
			{!keyword.length ? <React.Fragment>
				{itemCount ? <FoodGrid category={category} /> : <FoodGridSkeleton />}
				<Row id="newOnCheffy">
					{_new.length ? <NewOnCheffy _new={_new} /> : <NewAndPopularSkeleton title="New On Cheffy" />}
					{popular.length ? <PopularNearYou popular={popular} /> : <NewAndPopularSkeleton title="Popular Near You" />}
				</Row>
				<Row>
					<RecommendedChef />
					<MustTryChef />
					<TopKitchens />
				</Row>
			</React.Fragment> :
				<FoodSearch results={results} />
			}
		</>
	);
};

const countSelector = createSelector(
	(state) => state.food.collection,
	(items) => items.length
);

export default FoodContent;
