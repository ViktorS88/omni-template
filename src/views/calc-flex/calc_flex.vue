<template>
  <h1>Расчет flex коэфициэнтов</h1>
  <h3>ВНИМАНИЕ</h3>
  <p><strong>Данный код нельзя назвать образцовым, это очень давно написано, когда почти не было знаний и мне лень это
    переписывать но зато этот код работает и приносит пользу.</strong></p>
  <div class="calc-flex">

    <div>
      <router-link to="/">
        ссылка на главную страницу
      </router-link>
    </div>
    <!--<input class="flex-grow__box-sizing-inp id" type="checkbox" name="on-box-sizing"-->
<!--       id="box-sizing-active-">-->
	<input id="flex-toggle__grow" class="flex-grow__active display-none" type="radio"
	       name="flex-toggle"
	       checked>
	<input id="flex-toggle__shrink" class="flex-shrink__active display-none" type="radio" name="flex-toggle">
	<h1 class="page-title">Расчет flex коэффициэнтов для элементов</h1>

	<div class="flex-grow__wrap">
		<form class="flex-grow__form" action="">
			<div class="flex-grow__btns">
				<label for="flex-toggle__grow" class="btn flex-shrink__disable-label">flex-grow</label>
				<label for="flex-toggle__shrink" class="btn flex-shrink__active-label">flex-shrink</label>
			</div>
			<div class="flex-grow__btns">
				<button class="result btn" type="submit" >Расчитать</button>
				<button class="add-block btn" type="button" >Добавить элемент</button>
			</div>
			<div class="flex-grow__block-wrap">
				<fieldset class="flex-grow__block">
					<figcaption class="flew-grow__block-title">1 элемент</figcaption>
					<input class="flex-grow__box-sizing-inp id" type="checkbox" name="on-box-sizing"
					       id="box-sizing-active-">
					<div class="flex-grow__box-sizing">
						<label for="box-sizing-active-" class="flex-grow__box-sizing-label id">
							border-box</label>
						<div class="flex-grow__box-sizing-add-info">
							<p class="flex-grow__box-sizing-fb display-none">размеры border и padding
								<span class="blue">больше</span>
								flex-basis</p>
							<p class="flex-grow__box-sizing-b-p display-none">размеры border и padding
								<span class="blue">включены</span> во
								flex-basis
							</p>
						</div>
					</div>
					<div class="flex-grow__calculation-wrap">
						<div class="flex-grow__calculation">

							<div class="flex-grow__wrap-block-inp flex-grow__w show-info show-info__first-child flex-order">
									<label class="flex-grow__label id" for="width-element-">ожид. размер</label>
									<input class="flex-grow__inpW id" type="text" name="" id="width-element-"
									       value="100">
							</div>

							<div class="flex-grow__sign flex-grow__sign--minus-big flex-order">
								<span class="flex-shrink__sign-display-show">&#8212;</span>
								(
							</div>

							<div class="flex-grow__wrap-block-inp flex-grow__fb show-info flex-order">
									<label class="flex-grow__label id" for="fb-element-">flex-basis</label>
									<input class="flex-grow__inpFB id" type="text" name="" id="fb-element-"
									       value="30">
								</div>

							<div class="flex-grow__sign flex-order">
								+
							</div>

							<div class="flex-grow__elem-margin flex-grow__m show-info flex-order">
									<label for="flex-element-margin-" class="flex-grow__elem-margin-label id">&#8721;
										margin</label>
									<input class="flex-grow__elem-margin-inp id" type="text" name="elem-margin"
									       id="flex-element-margin-" value="10">
							</div>

							<div class="flex-grow__sign flex-order">
								+
							</div>

							<div class="flex-grow__elem-border flex-grow__b show-info flex-order">
									<label for="flex-element-border-" class="flex-grow__elem-border-label id">&#8721;
										border</label>
									<input class="flex-grow__elem-border-inp id" type="text" name="elem-border"
									       id="flex-element-border-" value="2">
							</div>

							<div class="flex-grow__sign flex-order">
								+
							</div>

							<div class="flex-grow__elem-padding  flex-grow__p show-info flex-order">
									<label for="flex-element-padding-"
									       class="flex-grow__elem-padding-label id">&#8721; padding</label>
									<input class="flex-grow__elem-padding-inp id" type="text" name="elem-padding"
									       id="flex-element-padding-" value="38">
							</div>

							<div class="flex-grow__sign flex-order">
								)
								<span class="flex-shrink__sign-display-show">=</span>
								<span class="flex-shrink__sign-display-none flex-grow__sign--minus-big">
									<span>&#8212;</span>
								</span>
							</div>

							<div class="flex-grow__sign flex-order flex-shrink__sign-display-none">
								= (
							</div>

							<div class="flex-grow__elem-result flex-order flex-grow__elem-result--shrink">
								<div class="flex-grow__diff-info-wrap show-info ">
									<div class="flex-grow__diff-info ">разница</div>
									<span class="flex-grow__result">0px</span>
								</div>

								<div class="flex-grow__sign flex-grow__sign--shrink flex-shrink__sign-display-none">
									/
								</div>

								<div class="flex-grow__diff-info-wrap flex-shrink__fb-p-b show-info  flex-shrink__sign-display-none">
									<span class="flex-shrink__fb">0px</span> <span
										class="flex-shrink__box-sizing-active">- (
									<span class="flex-shrink__b">0px</span> +
									<span class="flex-shrink__p">0px</span> ) </span>
								</div>
							</div>

							<div class="flex-grow__sign">
							<span class="flex-shrink__sign-display-none">)</span>
								/
							</div>
							<div class="flex-grow__elem-result">
								<div class="show-info  flex-order">
									<div class="flex-grow__coefficient">K = 0</div>
									<div class="flex-grow__diff-info nod">НОД</div>
									<span class="flex-grow__nod">0px</span>
								</div>
							</div>
						</div>

					</div>
						<input id="display-none-add-info" class="flex__display-none-add-info__inp id"
						       type="checkbox">
						<label for="display-none-add-info" class="display-none-add-info__label id">спрятать доп
						инфу</label>
					<div class="flex-grow__add-info">
						<p>
							исходный размер элемента: <span
								class="flex-grow__real-size bold">--px</span>;
						</p>
						<p class="">
							исходный размер
							<span class="flex-diff-big display-none">больше ожидаемого:</span>
							<span class="flex-diff-small display-none">меньше ожидаемого:</span>
							<span class="flex-diff-equal display-none">равен ожидаемому:</span>
							<span class="flex-grow__deficit-size-element bold">--px</span>;
						</p>
						<p>
							при полном
							<span class="flex-shrink__sign-display-show"> расширении </span>
							<span class="flex-shrink__sign-display-none"> сжатии </span>
							элемента с <span class="flex-grow__coefficient1 bold">K =
							0</span>
							для
						content будет доступно места: <span
							class="flex-grow__allowableContentWidth bold">--px</span>;
						</p>
						<p>
							&#8721; ожидаемых размеров всех элементов: <span class="flex-grow__total bold">0px
						</span>;
						</p>
						<p>
							в родителе дефицит: <span class="flex-grow__deficit bold">0px</span>;
						</p>
					</div>
					<button class="delete-block btn" type="button"> X</button>
				</fieldset>
			</div>

		</form>
	</div>
  </div>
</template>

<script>

export default {
  name: 'calc-flex',
  mounted(){
    let flexBasisSize = [];
    let flexWidthSize = [];
    let borderBoxActivate = [];
    let elemBorderSize = [];
    let elemPaddingSize = [];
    let elemMarginSize = [];
    let flexAddInfo = [];
    let flexBasisInputAll = document.querySelectorAll('.flex-grow__inpFB');
    let flexWidthInputAll = document.querySelectorAll('.flex-grow__inpW');
    let borderBoxActivateAll = document.querySelectorAll('.flex-grow__box-sizing-inp');
    let flexAddInfoAll = document.querySelectorAll('.flex__display-none-add-info__inp');
    let elemBorderSizeAll = document.querySelectorAll('.flex-grow__elem-border-inp');
    let elemPaddingSizeAll = document.querySelectorAll('.flex-grow__elem-padding-inp');
    let elemMarginSizeAll = document.querySelectorAll('.flex-grow__elem-margin-inp');
    let addBlock = document.querySelector('.add-block');
    let flexForm = document.querySelector('.flex-grow__form');
    let fieldsetBlockWrap = document.querySelector('.flex-grow__block-wrap');
    let flexBlock = document.querySelector('.flex-grow__block');
    let flexBlockTitleAll = document.querySelectorAll('.flew-grow__block-title');
    let deleteBlocks = document.querySelectorAll('.delete-block');
    let allBlocks = document.querySelectorAll('.flex-grow__block');

    function isInt(n){
      return Number(n) === n && n % 1 === 0;
    }

    function isFloat(n){
      return Number(n) === n && n % 1 !== 0;
    }
    function getArrInpValue(arr) {
      let i = 0;
      let result = [];
      for (let item of arr) {
        result[i] = +(item.value);
        i++;
      }
      return result;
    }

    function getMainParametrs () {
      flexBasisSize = getArrInpValue(flexBasisInputAll);
      flexWidthSize = getArrInpValue(flexWidthInputAll);
      borderBoxActivate = getArrInpValue(borderBoxActivateAll);
      flexAddInfo = getArrInpValue(flexAddInfoAll);
      elemBorderSize = getArrInpValue(elemBorderSizeAll);
      elemPaddingSize = getArrInpValue(elemPaddingSizeAll);
      elemMarginSize = getArrInpValue(elemMarginSizeAll);
    }

    function getForAddDeleteBlock(){
      allBlocks = document.querySelectorAll('.flex-grow__block');
      flexBlockTitleAll = document.querySelectorAll('.flew-grow__block-title');
      flexBasisInputAll = document.querySelectorAll('.flex-grow__inpFB');
      flexWidthInputAll = document.querySelectorAll('.flex-grow__inpW');
      borderBoxActivateAll = document.querySelectorAll('.flex-grow__box-sizing-inp');
      flexAddInfoAll = document.querySelectorAll('.flex__display-none-add-info__inp');
      elemBorderSizeAll = document.querySelectorAll('.flex-grow__elem-border-inp');
      elemPaddingSizeAll = document.querySelectorAll('.flex-grow__elem-padding-inp');
      elemMarginSizeAll = document.querySelectorAll('.flex-grow__elem-margin-inp');
    }

    function getSumBordPadMar(i) {
      getMainParametrs();
      return elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i];
    }

    function getAllowableContentWidth(i, cheked) {
      getMainParametrs();
      let result = null;
      if (cheked) {
        result = (flexWidthSize[i] - (getSumBordPadMar(i)));
      } else {
        result = (flexWidthSize[i] -
          (elemBorderSize[i] + elemPaddingSize[i] +
            elemMarginSize[i] + flexBasisSize[i]));
      }
      return result;
    }


    function showResult(i, coefficient, totalWidth, diff, allowableContentWidth, realSize, nod) {
      getMainParametrs();
      let realSizeElem = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__result`);
      let diffBig= document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-diff-big`);
      let diffSmall = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-diff-small`);
      let diffEqual = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-diff-equal`);
      let rs = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__real-size`);
      let dse = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__deficit-size-element`);
      let n = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__nod`);
      let coef = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__coefficient`);
      let coef1 = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__coefficient1`);
      let fb = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-shrink__fb`);
      let b = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-shrink__b`);
      let p = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-shrink__p`);
      let allowableContentW = document.querySelector(`.flex-grow__block:nth-child(${i +
      1}) .flex-grow__allowableContentWidth`);
      let flexShrinkActive = document.querySelector('.flex-shrink__active');
      if (isFloat(coefficient)) {
        coef.textContent = 'K=' + coefficient.toFixed(3).replace(/0*$/,"");
        coef1.textContent = 'K=' + coefficient.toFixed(3).replace(/0*$/,"");
      } else {
        coef.textContent = 'K=' + coefficient;
        coef1.textContent = 'K=' + coefficient;
      }
      realSizeElem.textContent = diff + 'px';
      allowableContentW.classList.remove('warning')
      if (flexShrinkActive.checked) {
        if (allowableContentWidth <= 0 ) {
          allowableContentW.textContent = 'контенту нет места!';
          allowableContentW.classList.add('warning');
        } else {
          allowableContentW.textContent = allowableContentWidth + 'px';
        }
      } else {
        if (allowableContentWidth <= 0) {
          allowableContentW.textContent = 'Для контента нет места!';
          allowableContentW.classList.add('warning');
        } else {
          allowableContentW.textContent = allowableContentWidth + 'px';
        }
      }
      rs.textContent = realSize + 'px';
      diffBig.classList.add('display-none');
      diffEqual.classList.add('display-none');
      diffSmall.classList.add('display-none');
      dse.classList.remove('warning');
      if ( diff  < 0) {
        dse.textContent = 'на ' + (-diff) + 'px';
        dse.classList.add('warning');
        if (flexShrinkActive.checked) {
          diffSmall.classList.remove('display-none');
        } else {
          diffBig.classList.remove('display-none');
        }
      } else if (diff == 0) {
        dse.textContent = 'равны';
        diffEqual.classList.remove('display-none');
      } else {
        dse.textContent = 'на ' + diff + 'px';
        if (flexShrinkActive.checked) {
          diffBig.classList.remove('display-none');
        } else {
          diffSmall.classList.remove('display-none');
        }
      }

      if (isFloat(nod)) {
        n.textContent =  nod.toFixed(3).replace(/0*$/,"") + 'px';
      } else {
        n.textContent = nod + 'px';
      }
      fb.textContent  = flexBasisSize[i] + 'px';
      b.textContent  = elemBorderSize[i] + 'px';
      p.textContent  = elemPaddingSize[i] + 'px';

    }
    function getNod() {
        getMainParametrs();
        let nod = 0;
        let realSize = 0;
        let flexShrinkActive = document.querySelector('.flex-shrink__active');
        for (let i = 0; i < allBlocks.length; i++) {
          let diff = 0;
          if (borderBoxActivateAll[i].checked) {
            if ((elemBorderSize[i] + elemPaddingSize[i]) > flexBasisSize[i]) {
              realSize = elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i];
              if (flexShrinkActive.checked) {
                diff = (realSize - flexWidthSize[i])/(elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i]);
              } else {
                diff = flexWidthSize[i] - realSize;
              }
            } else {
              realSize = flexBasisSize[i] + elemMarginSize[i];
              if (flexShrinkActive.checked) {
                diff = (realSize - flexWidthSize[i])/(flexBasisSize[i]  - (elemPaddingSize[i] + elemBorderSize[i]));
              } else {
                diff = flexWidthSize[i] - realSize;
              }
            }
          } else {
            realSize = flexBasisSize[i] + elemMarginSize[i] + elemBorderSize[i] + elemPaddingSize[i];
            if (flexShrinkActive.checked) {
              diff = (realSize - flexWidthSize[i]) /(flexBasisSize[i]);
            } else {
              diff = flexWidthSize[i] - realSize;
            }
          }
          if (flexShrinkActive.checked) {
            if (diff > 0 && (nod > diff || nod == 0)) {
              nod = diff;
            }
          } else {
            if (diff > 0 && (nod > diff || nod == 0)) {
              nod = diff;
            }
          }
        }
        return nod
      }

    function getCoefficient(nod) {
      getMainParametrs();
      let coefficient = 0;
      let diff = 0;
      let totalWidth = 0;
      let deficit = 0;
      let realSize = 0;
      let flexShrinkActive = document.querySelector('.flex-shrink__active');
      let flexGrowActive = document.querySelector('.flex-grow__active');
      for (let i = 0; i < allBlocks.length; i++) {
        let allowableContentWidth = 0;
        coefficient = 0;
        let fb = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__fb`);
        let p = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__b`);
        let b = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__p`);
        let boxSfb = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__box-sizing-fb`);
        let boxSbp = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__box-sizing-b-p`);
        fb.classList.remove('disable');
        p.classList.remove('disable');
        b.classList.remove('disable');
        boxSfb.classList.add('display-none');
        boxSbp.classList.add('display-none');

        if (borderBoxActivateAll[i].checked) {
          // если border-box true
            if ((elemBorderSize[i] + elemPaddingSize[i]) > flexBasisSize[i]) {
              //если border + padding > flex-basis
              if (((flexWidthSize[i] - (elemPaddingSize[i] + elemBorderSize[i] + elemMarginSize[i])) > 0 &&
                flexGrowActive.checked) ||
                (((elemPaddingSize[i] + elemBorderSize[i] + elemMarginSize[i]) - flexWidthSize[i]) > 0 &&
                flexShrinkActive.checked)) {
                // (ожидаемый размер - исходный размер) > 0 ||
                // (исходный размер - ожидаемый размер) > 0
                realSize = elemMarginSize[i] + elemBorderSize[i] + elemPaddingSize[i];
                if (flexShrinkActive.checked) {
                  diff = realSize - flexWidthSize[i];
                  coefficient = (diff / (elemPaddingSize[i] + elemBorderSize[i]))/ nod;
                  allowableContentWidth = 0;
                } else {
                  diff = flexWidthSize[i] - realSize;
                  coefficient = diff / nod;
                  allowableContentWidth = flexWidthSize[i] - (elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i]);
                }
                fb.classList.add('disable');
                boxSfb.classList.remove('display-none');
              } else {
                // (ожидаемый размер - исходный размер) < 0 ||
                // (исходный размер - ожидаемый размер) < 0
                realSize = elemMarginSize[i] + elemBorderSize[i] + elemPaddingSize[i];
                if (flexShrinkActive.checked) {
                  diff = realSize - flexWidthSize[i];
                  coefficient = 1;
                  allowableContentWidth = flexWidthSize[i] - (elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i]);
                } else {
                  diff = flexWidthSize[i] - realSize;
                  allowableContentWidth = 0;
                  coefficient = 0;
                }
                fb.classList.add('disable');
                boxSfb.classList.remove('display-none');
              }

            } else {
              // border-box true
              //если border + padding < flex-basis
              if (((flexWidthSize[i] - (flexBasisSize[i] + elemMarginSize[i])) > 0 && flexGrowActive.checked) ||
                (((flexBasisSize[i] + elemMarginSize[i]) - flexWidthSize[i]) > 0 &&
                flexShrinkActive.checked)) {
                // (ожидаемый размер - исходный размер) > 0 ||
                // (исходный размер - ожидаемый размер) > 0
                realSize = elemMarginSize[i] + flexBasisSize[i];
                if (flexShrinkActive.checked) {
                  diff = realSize - flexWidthSize[i];
                  allowableContentWidth = flexWidthSize[i] - (elemPaddingSize[i] + elemBorderSize[i] + elemMarginSize[i]);
                  coefficient = (diff / (flexBasisSize[i] - (elemBorderSize[i] + elemPaddingSize[i])))/ nod;
                } else {
                  diff = flexWidthSize[i] - realSize;
                  allowableContentWidth = flexWidthSize[i] - (elemPaddingSize[i] + elemBorderSize[i] + elemMarginSize[i]);
                  coefficient = diff / nod;
                }
                b.classList.add('disable');
                p.classList.add('disable');
                boxSbp.classList.remove('display-none');
              } else {
                //если border + padding < flex-basis
                // (ожидаемый размер - исходный размер) < 0 ||
                // (исходный размер - ожидаемый размер) < 0
                realSize = elemMarginSize[i] + flexBasisSize[i];
                if (flexShrinkActive.checked) {
                  diff = realSize - flexWidthSize[i];
                  coefficient = 1;
                  allowableContentWidth = flexBasisSize[i] - elemPaddingSize[i] - elemBorderSize[i];
                } else {
                  diff = flexWidthSize[i] - realSize;
                  coefficient = 0;
                  allowableContentWidth = flexWidthSize[i] - (elemPaddingSize[i] + elemBorderSize[i] + elemMarginSize[i]);
                }
                b.classList.add('disable');
                p.classList.add('disable');
                boxSbp.classList.remove('display-none');
              }
            }

          } else {
          if (((flexWidthSize[i] - (flexBasisSize[i] + getSumBordPadMar(i))) > 0 &&
              flexGrowActive.checked) ||
              (((flexBasisSize[i] + getSumBordPadMar(i)) - flexWidthSize[i]) >= 0 &&
              flexShrinkActive.checked)) {
              // (ожидаемый размер - исходный размер) > 0 ||
              // (исходный размер - ожидаемый размер) > 0
              realSize = elemBorderSize[i] + elemPaddingSize[i] +
                elemMarginSize[i] + flexBasisSize[i];
            if (flexShrinkActive.checked) {
              //border-box false
              diff = realSize - flexWidthSize[i];
                if (nod == 0 || diff == 0) {
                  coefficient = 1;
                } else {
                  coefficient = diff / (flexBasisSize[i]) / nod;
                }
                allowableContentWidth = flexWidthSize[i] - (elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i]);
              } else {
                diff = flexWidthSize[i] - realSize;
                coefficient = diff / nod;
                allowableContentWidth = flexWidthSize[i] - (elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i]);
              }
            } else {
            // (ожидаемый размер - исходный размер) < 0 ||
            // (исходный размер - ожидаемый размер) < 0
            realSize = flexBasisSize[i] + getSumBordPadMar(i);
              if (flexShrinkActive.checked) {
                diff = realSize - flexWidthSize[i];
                allowableContentWidth = flexWidthSize[i] - (elemBorderSize[i] + elemPaddingSize[i] + elemMarginSize[i]);
                coefficient = 1;
              } else {
                diff = flexWidthSize[i] - realSize;
                allowableContentWidth = flexBasisSize[i] + diff;
                coefficient = 0;
              }
          }
          }

        let nodElem = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__diff-info`);
        totalWidth += flexWidthSize[i];
        deficit += diff;
        showResult(i, coefficient, totalWidth, diff, allowableContentWidth, realSize, nod);
      }
      showAddInfo(deficit, totalWidth);
      return coefficient;
    }

    function showAddInfo(deficit, totalWidth, diff) {
      allBlocks = document.querySelectorAll('.flex-grow__block');
      for (let i = 0; i < allBlocks.length; i++) {
        let deficitWidth = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__deficit`);
        let t = document.querySelector(`.flex-grow__block:nth-child(${i + 1}) .flex-grow__total`);
        t.textContent = totalWidth + 'px';
        if (deficit < 0) {
          deficitWidth.textContent = deficit + 'px';
          deficitWidth.classList.add('warning');
        } else {
          deficitWidth.classList.remove('warning');
          deficitWidth.textContent = 'места хватает';
        }

      }
    }


    addBlock.onclick = function () {
      getMainParametrs();
      fieldsetBlockWrap.append(flexBlock.cloneNode(true));
      deleteBlocks = document.querySelectorAll('.delete-block');
      getForAddDeleteBlock();
      for (let deleteBlock of deleteBlocks) {
        deleteBlock.onclick = function () {
          this.parentNode.remove();
          getForAddDeleteBlock();
          for (let i = 0; i < allBlocks.length; i++) {
            flexBlockTitleAll[i].textContent = `${i + 1} элемент`;
            }
        }
      }
      for (let i = 0; i < allBlocks.length; i++) {
        flexBlockTitleAll[i].textContent = `${i + 1} элемент`;
        let idAll = document.querySelectorAll(`.flex-grow__block:nth-child(${i + 1}) .id`);
        for (let j = 0; j < idAll.length; j++) {
          idAll[j].id = idAll[j].id + i;
          idAll[j].htmlFor = idAll[j].htmlFor + i;
        }

      }
    }

    flexForm.onsubmit = function (evt) {
      evt.preventDefault();
      let nod = getNod();
      let coefficient = getCoefficient(nod);
    }

  },
  unmounted() {
  }
}
</script>

<style lang="scss">

  .calc-flex {
    background: white;
  }
  .btn {
  border: 1px solid blue;
  border-radius: 10px;
  outline: none;
}
.flex-grow__btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.flex-grow__btns button,
.flex-grow__btns label {
  width: 50%;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  text-align: center;
}
.flex-grow__btns label {
  width: 50%;
  padding: 15px;
  margin: 10px;
  font-size: 20px;
}
.btn:active {
  background: mediumslateblue;
}
.delete-block {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px 10px;
}
.flew-grow__block-title {
  font-size: 23px;
  margin-bottom: 10px;
}
.flex-grow__box-sizing {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
  align-self: flex-start;
  margin-bottom: 8px;
}
.flex-grow__box-sizing-add-info p {
  border: 1px solid gray;
  margin: 0;
  margin-left: 10px;
  padding: 2px;
  background: darkorange;
  border-radius: 4px;
}
.flex-grow__box-sizing-label,
.display-none-add-info__label {
  font-size: 16px;
  padding: 3px;
  background: lightblue;
  border-radius: 5px;
}
.flex-grow__block-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.flex-grow__block {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-radius: 10px;
  margin: 5px;
}
.flex-grow__calculation {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 10px;
}
.show-info {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 70px;
  padding: 3px;
  border-radius: 10px;
  background: #34495e;
  text-align: center;
  color: white;
  min-height: 70px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.show-info__first-child {
  background: orange;
  color: black;
}
.flex-shrink__sign-display-none {
  display: none;
}
.flex-shrink__sign-display-show {
  display: inline;
}
.flex-shrink__active {
  width: 100%;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(1) {
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(2) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(3) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(4) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(5) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(6) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(7) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(8) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(9) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-order:nth-child(10) {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-shrink__sign-display-none {
  display: inline;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-shrink__sign-display-show {
  display: none;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-shrink__sign-display-show {
  display: none;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-shrink__active-label {
  background-color: blueviolet;
  color: white;
}
.flex-shrink__disable-label {
  background-color: blueviolet;
  color: white;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-shrink__disable-label {
  background-color: white;
  color: black;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-grow__elem-result--shrink {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  vertical-align: top;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-grow__elem-result--shrink .show-info {
  width: auto;
  min-height: auto;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .show-info.flex-shrink__sign-display-none {
  color: white;
  background: #34495e;
  min-width: 150px;
  min-height: 0;
  padding: 2px;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-grow__diff-info-wrap {
  padding-bottom: 7px;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-shrink__fb-p-b.flex-shrink__sign-display-none {
  padding-top: 7px;
}
.flex-shrink__active:checked ~ .flex-grow__wrap .flex-grow__sign--shrink {
  position: relative;
  margin: -10px 0;
}
.flex__display-none-add-info__inp:checked ~ .flex-grow__add-info {
  display: none;
}
.flex-shrink__box-sizing-active {
  display: none;
}
.flex-grow__box-sizing-inp:checked ~ .flex-grow__calculation-wrap .flex-shrink__box-sizing-active {
  display: inline;
}
.flex-grow__sign {
  position: relative;
  z-index: 1;
  width: 30px;
  margin: 0 -8px;
  border-radius: 50%;
  background-color: green;
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  -ms-flex-item-align: center;
  align-self: center;
  text-align: center;
  color: white;
}
.flex-grow__sign--minus-big span {
  font-size: 10px;
}
.show-info input {
  position: relative;
  left: 0;
  right: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 3px 10px;
  text-align: center;
  font-weight: bold;
}
.flex-grow__diff-info {
  border-radius: 10px;
  margin: 1px 0;
  padding: 2px;
  background: navajowhite;
  color: black;
}
.nod.flex-grow__diff-info {
  position: relative;
  color: white;
  background: steelblue;
  font-size: 15px;
  width: 55px;
  -ms-flex-item-align: center;
  align-self: center;
  padding: 3px;
}
.flex-grow__coefficient {
  color: white;
  position: relative;
  top: -8px;
  background: #ba0000;
  border-radius: 10px;
  padding: 3px;
}
.flex-grow__coefficient1 {
  color: red;
}
.flex-grow__add-info p {
  max-width: 400px;
  border: 1px solid gray;
  margin: 3px;
  padding: 3px 7px;
  border-radius: 10px;
  background: lightgoldenrodyellow;
}
.bold {
  color: red;
}
.blue {
  color: blue;
  font-weight: bold;
}
.disable {
  background: grey;
}
.disable input {
  color: black;
  background-color: white;
  text-decoration: line-through;
}
.flex-grow__add-info .warning {
  background: red;
  padding: 2px;
  border-radius: 3px;
  color: white;
}
.flex-grow__elem-result {
  background: grey;
  border-radius: 10px;
  padding: 3px;
}
.display-block {
  display: block;
}
.display-none {
  display: none;
}
.display-inline {
  display: inline;
}

/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0aW9uX2ZsZXhTdHlsZS5sZXNzIiwiY2FsY3VsYXRpb25fZmxleFN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDQTs7RUFFRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0E7RUFDRSwyQkFBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0FDQ0Y7QURDQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENBOztFQUVFLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0E7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0ksZUFBQTtBQ0NOO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0ksb0JBQUE7RUFDSSxZQUFBO0VBQ1IsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDSSxlQUFBO0VBQ0oseUJBQUE7RUFDSSxzQkFBQTtFQUNJLG1CQUFBO0VBQ1IsbUJBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtF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RUFDRSxVQUFBO0FDQ0Y7QURDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0E7RUFDRSxnQkFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0NGO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0E7RUFDRSxjQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6ImNhbGN1bGF0aW9uX2ZsZXhTdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mbGV4LWdyb3dfX2J0bnMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleC1ncm93X19idG5zIGJ1dHRvbixcbi5mbGV4LWdyb3dfX2J0bnMgbGFiZWwge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsZXgtZ3Jvd19fYnRucyBsYWJlbCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBtZWRpdW1zbGF0ZWJsdWU7XG59XG4uZGVsZXRlLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZmxldy1ncm93X19ibG9jay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mbGV4LWdyb3dfX2JveC1zaXppbmcge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmZsZXgtZ3Jvd19fYm94LXNpemluZy1hZGQtaW5mbyBwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kOiBkYXJrb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZmxleC1ncm93X19ib3gtc2l6aW5nLWxhYmVsLFxuLmRpc3BsYXktbm9uZS1hZGQtaW5mb19fbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZmxleC1ncm93X19ibG9jay13cmFwIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZsZXgtZ3Jvd19fYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLmZsZXgtZ3Jvd19fY2FsY3VsYXRpb24ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2hvdy1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2hvdy1pbmZvX19maXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmZsZXgtc2hyaW5rX19zaWduLWRpc3BsYXktbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleC1zaHJpbmtfX3NpZ24tZGlzcGxheS1zaG93IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCgxKSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE7XG4gICAgICAtbXMtZmxleC1vcmRlcjogMDtcbiAgICAgICAgICBvcmRlcjogMDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XG4gICAgICAtbXMtZmxleC1vcmRlcjogLTE7XG4gICAgICAgICAgb3JkZXI6IC0xO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtb3JkZXI6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgICAgICAgICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1vcmRlcjpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xuICAgICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xuICAgICAgICAgIG9yZGVyOiAtMTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XG4gICAgICAtbXMtZmxleC1vcmRlcjogLTE7XG4gICAgICAgICAgb3JkZXI6IC0xO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtb3JkZXI6bnRoLWNoaWxkKDYpIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgICAgICAgICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1vcmRlcjpudGgtY2hpbGQoNykge1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xuICAgICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xuICAgICAgICAgIG9yZGVyOiAtMTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCg4KSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XG4gICAgICAtbXMtZmxleC1vcmRlcjogLTE7XG4gICAgICAgICAgb3JkZXI6IC0xO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtb3JkZXI6bnRoLWNoaWxkKDkpIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgICAgICAgICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1vcmRlcjpudGgtY2hpbGQoMTApIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgICAgICAgICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1zaHJpbmtfX3NpZ24tZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtc2hyaW5rX19zaWduLWRpc3BsYXktc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1zaHJpbmtfX3NpZ24tZGlzcGxheS1zaG93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LXNocmlua19fYWN0aXZlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZsZXgtc2hyaW5rX19kaXNhYmxlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtc2hyaW5rX19kaXNhYmxlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LWdyb3dfX2VsZW0tcmVzdWx0LS1zaHJpbmsge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LWdyb3dfX2VsZW0tcmVzdWx0LS1zaHJpbmsgLnNob3ctaW5mbyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLnNob3ctaW5mby5mbGV4LXNocmlua19fc2lnbi1kaXNwbGF5LW5vbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LWdyb3dfX2RpZmYtaW5mby13cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LXNocmlua19fZmItcC1iLmZsZXgtc2hyaW5rX19zaWduLWRpc3BsYXktbm9uZSB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1ncm93X19zaWduLS1zaHJpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogLTEwcHggMDtcbn1cbi5mbGV4X19kaXNwbGF5LW5vbmUtYWRkLWluZm9fX2lucDpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fYWRkLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZsZXgtc2hyaW5rX19ib3gtc2l6aW5nLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleC1ncm93X19ib3gtc2l6aW5nLWlucDpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fY2FsY3VsYXRpb24td3JhcCAuZmxleC1zaHJpbmtfX2JveC1zaXppbmctYWN0aXZlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsZXgtZ3Jvd19fc2lnbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogMCAtOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mbGV4LWdyb3dfX3NpZ24tLW1pbnVzLWJpZyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnNob3ctaW5mbyBpbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mbGV4LWdyb3dfX2RpZmYtaW5mbyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMXB4IDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogbmF2YWpvd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ub2QuZmxleC1ncm93X19kaWZmLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi5mbGV4LWdyb3dfX2NvZWZmaWNpZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLThweDtcbiAgYmFja2dyb3VuZDogI2JhMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogM3B4O1xufVxuLmZsZXgtZ3Jvd19fY29lZmZpY2llbnQxIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5mbGV4LWdyb3dfX2FkZC1pbmZvIHAge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDNweDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG59XG4uYm9sZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXNhYmxlIHtcbiAgYmFja2dyb3VuZDogZ3JleTtcbn1cbi5kaXNhYmxlIGlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uZmxleC1ncm93X19hZGQtaW5mbyAud2FybmluZyB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mbGV4LWdyb3dfX2VsZW0tcmVzdWx0IHtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogM3B4O1xufVxuLmRpc3BsYXktYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kaXNwbGF5LW5vbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRpc3BsYXktaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4iLCIuYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mbGV4LWdyb3dfX2J0bnMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleC1ncm93X19idG5zIGJ1dHRvbixcbi5mbGV4LWdyb3dfX2J0bnMgbGFiZWwge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsZXgtZ3Jvd19fYnRucyBsYWJlbCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBtZWRpdW1zbGF0ZWJsdWU7XG59XG4uZGVsZXRlLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZmxldy1ncm93X19ibG9jay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mbGV4LWdyb3dfX2JveC1zaXppbmcge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZmxleC1ncm93X19ib3gtc2l6aW5nLWFkZC1pbmZvIHAge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5mbGV4LWdyb3dfX2JveC1zaXppbmctbGFiZWwsXG4uZGlzcGxheS1ub25lLWFkZC1pbmZvX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5mbGV4LWdyb3dfX2Jsb2NrLXdyYXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4LWdyb3dfX2Jsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5mbGV4LWdyb3dfX2NhbGN1bGF0aW9uIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2hvdy1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2hvdy1pbmZvX19maXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmZsZXgtc2hyaW5rX19zaWduLWRpc3BsYXktbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleC1zaHJpbmtfX3NpZ24tZGlzcGxheS1zaG93IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCgxKSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE7XG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xuICBvcmRlcjogMDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XG4gIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgb3JkZXI6IC0xO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtb3JkZXI6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xuICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1vcmRlcjpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xuICAtbXMtZmxleC1vcmRlcjogLTE7XG4gIG9yZGVyOiAtMTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCg1KSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XG4gIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgb3JkZXI6IC0xO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtb3JkZXI6bnRoLWNoaWxkKDYpIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xuICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1vcmRlcjpudGgtY2hpbGQoNykge1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xuICAtbXMtZmxleC1vcmRlcjogLTE7XG4gIG9yZGVyOiAtMTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LW9yZGVyOm50aC1jaGlsZCg4KSB7XG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XG4gIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgb3JkZXI6IC0xO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtb3JkZXI6bnRoLWNoaWxkKDkpIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xuICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1vcmRlcjpudGgtY2hpbGQoMTApIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xuICBvcmRlcjogLTE7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1zaHJpbmtfX3NpZ24tZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtc2hyaW5rX19zaWduLWRpc3BsYXktc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1zaHJpbmtfX3NpZ24tZGlzcGxheS1zaG93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LXNocmlua19fYWN0aXZlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZsZXgtc2hyaW5rX19kaXNhYmxlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLmZsZXgtc2hyaW5rX19kaXNhYmxlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LWdyb3dfX2VsZW0tcmVzdWx0LS1zaHJpbmsge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LWdyb3dfX2VsZW0tcmVzdWx0LS1zaHJpbmsgLnNob3ctaW5mbyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuLmZsZXgtc2hyaW5rX19hY3RpdmU6Y2hlY2tlZCB+IC5mbGV4LWdyb3dfX3dyYXAgLnNob3ctaW5mby5mbGV4LXNocmlua19fc2lnbi1kaXNwbGF5LW5vbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LWdyb3dfX2RpZmYtaW5mby13cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbi5mbGV4LXNocmlua19fYWN0aXZlOmNoZWNrZWQgfiAuZmxleC1ncm93X193cmFwIC5mbGV4LXNocmlua19fZmItcC1iLmZsZXgtc2hyaW5rX19zaWduLWRpc3BsYXktbm9uZSB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG4uZmxleC1zaHJpbmtfX2FjdGl2ZTpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fd3JhcCAuZmxleC1ncm93X19zaWduLS1zaHJpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogLTEwcHggMDtcbn1cbi5mbGV4X19kaXNwbGF5LW5vbmUtYWRkLWluZm9fX2lucDpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fYWRkLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZsZXgtc2hyaW5rX19ib3gtc2l6aW5nLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleC1ncm93X19ib3gtc2l6aW5nLWlucDpjaGVja2VkIH4gLmZsZXgtZ3Jvd19fY2FsY3VsYXRpb24td3JhcCAuZmxleC1zaHJpbmtfX2JveC1zaXppbmctYWN0aXZlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsZXgtZ3Jvd19fc2lnbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogMCAtOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZsZXgtZ3Jvd19fc2lnbi0tbWludXMtYmlnIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uc2hvdy1pbmZvIGlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mbGV4LWdyb3dfX2RpZmYtaW5mbyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMXB4IDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogbmF2YWpvd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ub2QuZmxleC1ncm93X19kaWZmLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiA1NXB4O1xuICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuLmZsZXgtZ3Jvd19fY29lZmZpY2llbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kOiAjYmEwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4uZmxleC1ncm93X19jb2VmZmljaWVudDEge1xuICBjb2xvcjogcmVkO1xufVxuLmZsZXgtZ3Jvd19fYWRkLWluZm8gcCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cbi5ib2xkIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5ibHVlIHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRpc2FibGUge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xufVxuLmRpc2FibGUgaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5mbGV4LWdyb3dfX2FkZC1pbmZvIC53YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZsZXgtZ3Jvd19fZWxlbS1yZXN1bHQge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4uZGlzcGxheS1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmRpc3BsYXktbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZGlzcGxheS1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4iXX0= */

</style>
