const hiddenClass = "story__block_hidden";
const activeClass = "story__block_active";
const activeDotClass = "pagination__dot_active";


InitStoryBoards();


function InitStoryBoards() {
    document
        .querySelectorAll(".story")
        .forEach(InitStoryBoard);
}

function InitStoryBoard(story) {
    const blocks = [...story.querySelectorAll(".story__block")];
    const pagination = story.querySelector(".story__pagination");
    const dotsContainer = pagination.querySelector(".pagination__dots");

    let dots = [];
    let activeBlock = null;
    let nextActiveBlock = null;

    InitBlocks();
    addEventListener('scroll', CheckBlocks);


    function AddDot(dotsContainer) {
        let dot = document.createElement('div');
        dot.className = "pagination__dot";
        dotsContainer.append(dot);
        return dot;
    }


    function InitBlocks() {
        blocks.forEach(block => {
            Hide(block);
            dots.push(AddDot(dotsContainer));
            Check(block);
        });
        SetActive(nextActiveBlock)
    }

    function CheckBlocks() {
        blocks.forEach(Check);
        SetActive(nextActiveBlock)
    }

    function Check(block) {
        if (UnderVisibleLine(block)) {
            Show(block);
            nextActiveBlock = block;
        }
    }


    function UnderVisibleLine(block) {
        const rect = block.getBoundingClientRect();
        const blockCenter = rect.top + .5 * rect.height;
        const windowThreshold = .8 * window.innerHeight;
        return blockCenter - windowThreshold <= 0;
    }

    function Show(block) {
        block.classList.remove(hiddenClass);
    }

    function Hide(block) {
        block.classList.add(hiddenClass);
    }


    function SetActive(block) {
        if (activeBlock) {
            dots[blocks.indexOf(activeBlock)].classList.remove(activeDotClass)
            activeBlock.classList.remove(activeClass);
        }

        activeBlock = block;

        if (activeBlock) {
            dots[blocks.indexOf(activeBlock)].classList.add(activeDotClass)
            activeBlock.classList.add(activeClass);
        }
    }
}